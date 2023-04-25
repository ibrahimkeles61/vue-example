// 61.ibrahimkeles@gmail.com : f34376e641mshe402b0070847742p1b7ddejsnd45409c991ed
// ibrahim6114@gmail.com : a28b6662c4mshd83e7bc07a67e94p130991jsn7b6e63d138e3
// codwithmum@gmail.com : 51362997c6msha0eebcdc24a2362p175ee9jsnaeec7a84c5c8
// 11.melihtuna@gmail.com : d97a568562msh8c0c0d839d5e9cfp1d513bjsnbc94c98f8ecf

const translate = async (word) => {
  const encodedParams = new URLSearchParams();

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "d97a568562msh8c0c0d839d5e9cfp1d513bjsnbc94c98f8ecf",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  encodedParams.append("source", "en");
  encodedParams.append("target", "tr");
  encodedParams.append("q", word);

  // const from = "en";
  const from = await fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
    options
  )
    .then((response) => response.json())
    .then((response) => response.data.detections[0][0].language)
    .catch((err) => console.error(err));

  if (from != "en") {
    alert("Üst Kısıma İngilizce Kelime Girilmelidir");
    return -1;
  }

  return (
    from == "en" &&
    (await fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    )
      .then((response) => response.json())
      .then((response) => response.data.translations[0].translatedText)
      .catch((err) => console.error(err)))
  );

  // return word + "   asd";
};

export { translate };
