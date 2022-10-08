const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total feedback: {total}</p>
      <p
        style={{
          color: 'black',
          fontSize: '24px',
          fontWeight: '700',

          padding: '10px',
        }}
      >
        Positive feedback : {positivePercentage} %{' '}
      </p>
    </div>
  );
};

export default Statistics;
