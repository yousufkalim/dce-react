function ViewImageModal(props) {
  return (
    <div
      className="tqs_sqm_container"
      style={{
        height: "40vh",
        width: "40vw",
      }}
    >
      <img
        src={URL.createObjectURL(props.src)}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default ViewImageModal;
