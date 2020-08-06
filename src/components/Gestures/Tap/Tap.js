import React from "react";

const Tap = () => {
  return (
    <section className="section">
      <h3>Tap</h3>
      <p>
        <code>whileTap</code> gets called while something is being tapped
      </p>
      <p>
        <code>onTap</code> gets called when a tap ends and the tapper (finger or
        mouse cursor) is over the element
      </p>
      <p>
        <code>onTapStart</code> gets called when the tap starts
      </p>
      <p>
        <code>onTapCancel</code> gets called when the tap ends and the tapper is
        not on the element
      </p>
    </section>
  );
};

export default Tap;
