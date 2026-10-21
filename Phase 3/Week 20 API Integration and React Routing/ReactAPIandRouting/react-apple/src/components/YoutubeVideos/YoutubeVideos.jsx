import { useEffect, useState } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [YoutubeVideos, setYoutubeVideos] = useState([]);

  // useEffect(()=>{
  //   fetch(
  //   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&type=video&key=AIzaSyB5_yFT5h3IKG52kLU6dJgvrYlWtJ6iWMc",
  // )
  // .then((res)=> res.json())
  // .then((data)=> {
  //   setYoutubeVideos(data.items);
  // })
  // .catch((error)=>{
  //   console.error("Error fetching videos:", error);
  // });
  // },[])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&type=video&key=AIzaSyB5_yFT5h3IKG52kLU6dJgvrYlWtJ6iWMc",
        );
        const data = await res.json();
        setYoutubeVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos()
  }, []);

  console.log(YoutubeVideos);

  return (
    <>
      <section className="youtubeVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>

            {YoutubeVideos?.map((singleVideo, i) => {
              return (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default YoutubeVideos;
