
const Alert = ({ type = 'info', title, children, onClose, closable = true }) => {
  const styles = {
    info: { bg: "lightgray", border: "gray", icon: "Info" },
    success: { bg: "lightgreen", border: "green", icon: "Success" },
    warning: { bg: "yellow", border: "orange", icon: "!" },
    error: { bg: "tomato", border: "red", icon: "Error" },
  };

  const style = styles[type] || styles.info;

  return (
    <div
      style={{
        backgroundColor: style.bg,
        borderLeft: `4px solid ${style.border}`,
        padding: "16px",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      <strong>
        {style.icon} {title}
      </strong>

      <div>{children}</div>

      {closable && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
