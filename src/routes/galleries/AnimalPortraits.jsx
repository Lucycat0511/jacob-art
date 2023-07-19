import { useState, useEffect } from "react";
import storage from "../../firebaseConfig";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export default function AnimalPortraits() {
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    if (urlList.length === 0) {
      listAll(
        ref(storage, "gs://jacob-lang-art.appspot.com/animal-portraits")
      ).then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(
            ref(
              storage,
              `gs://jacob-lang-art.appspot.com/animal-portraits/${item.name}`
            )
          ).then((url) => {
            setUrlList((prev) => [url, ...prev]);
          });
        });
      });
    }
  }, []);

  return (
    <div
      className="flex flex-col gap-4 items-center
    md:grid md:grid-flow-row md:grid-cols-3"
    >
      {urlList.map((img, index) => {
        return (
          <img src={img} key={index} alt={img} className="w-4/5 md:w-full" />
        );
      })}
    </div>
  );
}
