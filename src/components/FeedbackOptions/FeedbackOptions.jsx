const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(buttonName => {
    return (
      <button
        type="button"
        name={buttonName}
        onClick={onLeaveFeedback}
        key={buttonName}
        style={{
          padding: '7px',
          border: ' 1px dashed green',
          borderRadius: '10px',
          backgroundColor: 'mediumseagreen',
          width: '150px',
          gap: '20px',
          cursor: 'pointer',
        }}
      >
        {buttonName}
      </button>
    );
  });
};

export default FeedbackOptions;
