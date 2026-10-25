const { useState } = React;

export const ColorPicker = () => {
  const [background, setBackground] = useState("#ffffff")
  return (
    <div style={{backgroundColor: background}} id="color-picker-container">
      <h3>Choose a color</h3>
      <input onChange={(event) => setBackground(event.target.value)} id="color-input" type="color" value={background} />
    </div>
  )
};

