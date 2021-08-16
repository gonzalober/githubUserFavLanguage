export const getTopLanguages = (data) => {
  let countLanguages = {};
  let totalLanguageCount;
  if (Array.isArray(data)) {
    totalLanguageCount = data.length;
    for (let i = 0; i < data.length; i++) {
      if (data[i].language !== null) {
        countLanguages[data[i].language] =
          (countLanguages[data[i].language] || 0) + 1;
      }
    }
    let resultObj = Object.keys(countLanguages).map((key) => ({
      language: key,
      quantity: countLanguages[key],
      percentage: countLanguages[key] / totalLanguageCount,
    }));
    return resultObj.sort((a, b) => b.quantity - a.quantity);
  }
};

const TopLanguage = ({ data, user }) => {
  return (
    <div className="answer">
      {data &&
        `${getTopLanguages(data)[0].language} is the most used language for
      the username: ${user}`}

      {data &&
        getTopLanguages(data).map((obj) => {
          return (
            <div key={obj.language}>
              <p />
              {obj.language}: {Math.floor(obj.percentage * 100)}%
            </div>
          );
        })}
    </div>
  );
};
export default TopLanguage;
