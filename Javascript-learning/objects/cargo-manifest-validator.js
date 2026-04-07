function normalizeUnits(manifest) {
  let normalizedWeight = manifest.weight;

  if (manifest.unit === "lb") {
    normalizedWeight = manifest.weight * 0.45;
  }

  return {
    ...manifest,
    weight: normalizedWeight,
    unit: "kg"
  };
}

function validateManifest(manifest) {
  const validatedManifest = {};
  //check id
  if (manifest.hasOwnProperty("containerId")) {
    if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
      validatedManifest.containerId = "Invalid";
    }
  } else {
      validatedManifest.containerId = "Missing";
  }
  //check destination
  if (manifest.hasOwnProperty("destination")) {
    if (typeof manifest.destination !== "string" || manifest.destination.trim() == "") {
      validatedManifest.destination = "Invalid";
    }
  } else {
      validatedManifest.destination = "Missing";
  }
  //check weight
  if (manifest.hasOwnProperty("weight")) {
    if (typeof manifest.weight !== "number" || manifest.weight <= 0 || !manifest.weight) {
      validatedManifest.weight = "Invalid";
    }
  } else {
      validatedManifest.weight = "Missing";
  }
  //check unit
  if (manifest.hasOwnProperty("unit")) {
    if (manifest.unit !== "kg" && manifest.unit !== "lb") {
      validatedManifest.unit = "Invalid";
    }
  } else {
    validatedManifest.unit = "Missing";
  }
  //check hazmat
  if (manifest.hasOwnProperty("hazmat")) {
    if (typeof manifest.hazmat !== "boolean") {
      validatedManifest.hazmat = "Invalid";
    }  
  } else {
    validatedManifest.hazmat = "Missing";
  }
  
  return validatedManifest;
}

// console.log(validateManifest({ weight: NaN }));

function processManifest(manifest) {
  const validatedManifest = validateManifest(manifest);
  if (Object.keys(validatedManifest).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalizedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
      console.log(`Validation error: ${manifest.containerId}`);
      console.log(validatedManifest);
    }
}

processManifest({ containerId: -88, destination: "Soledad", weight: NaN });