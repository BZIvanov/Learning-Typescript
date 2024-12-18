type AlertSuccessProps = {
  type: "success";
  infoText: string;
};

type AlertErrorProps = {
  type: "error";
  severity: "low" | "medium" | "high";
  infoText: string;
  debugInfo: string;
};

// pick different types, because on one hand we don't want severity to be required prop
// and on the other hand we don't want to pass some useless severity prop just to bypass the required prop
type AlertProps = AlertSuccessProps | AlertErrorProps;

const severityColorMap = {
  low: "yellow",
  medium: "orange",
  high: "red",
};

const Alert = (props: AlertProps) => {
  const { type, infoText } = props;

  if (type === "success") {
    return (
      <div style={{ backgroundColor: "darkgray", color: "green" }}>
        {infoText}
      </div>
    );
  }

  // after we passed the success type prop, typescript will know, that we are going to have values for severity and debugInfo props
  const { severity, debugInfo } = props;

  return (
    <div
      style={{ backgroundColor: "darkgray", color: severityColorMap[severity] }}
    >
      <p>{infoText}</p>
      <p>{debugInfo}</p>
    </div>
  );
};

export default Alert;
