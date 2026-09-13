const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

const checkoutDevice = (ledger, assetTag, borrower) => {
  const updatedLedger = structuredClone(ledger);
  let confirmationString = `${assetTag} was not found`;
  if (assetTag in ledger) {
    if (ledger[assetTag].status == "CheckedOut") {
      confirmationString = `${assetTag} is already checked out`;  
    } else {
        updatedLedger[assetTag].borrower.name = borrower.name;
        updatedLedger[assetTag].borrower.email = borrower.email;
        updatedLedger[assetTag].status = "CheckedOut";
        confirmationString = `${assetTag}${borrower.name}`;
    }
  }

  return {
      ledger: updatedLedger,
      message: confirmationString
  }
}

const checkinDevice = (ledger, assetTag) => {
  const updatedLedger = structuredClone(ledger);
  let confirmationString = `${assetTag} was not found`;
  if (assetTag in ledger) {
      updatedLedger[assetTag].borrower = {
      name: "",
      email: ""
    };
    updatedLedger[assetTag].dueDate = "";
    updatedLedger[assetTag].status = "CheckedIn";
    confirmationString = assetTag;
  }
  return { ledger: updatedLedger, message: confirmationString }
}

const listOverdueDevices = (ledger, today) => {
  const overdueList = [];
  for (const key in ledger) {
    if (ledger[key].status == "CheckedOut" && checkOverdue(today, ledger[key].dueDate) < 0) {
      overdueList.push(ledger[key]);
    }
  }
  if (overdueList.length > 0) {
    overdueList.sort((a,b) => checkOverdue(b["dueDate"], a["dueDate"]));
  }
  return overdueList;
}

const checkOverdue = (today, dueDate) => {
  const [m1, d1, y1] = today.split("/").map(Number);
  const [m2, d2, y2] = dueDate.split("/").map(Number);

  if (y2 !== y1) return y2-y1;
  if (m2 !== m1) return m2-m1;
  return d2-d1;
}

const serializeLedger = ledger => {
  return JSON.stringify(ledger);
}

const loadLedger = ledger => {
  return JSON.parse(ledger);
}


