import Alert from "../../components/Alert/Alert"
import FifthSection from "../../components/FifthSection/FifthSection"
import FirstSection from "../../components/FirstSection/FirstSection"
import FourthSection from "../../components/FourthSection/FourthSection"
import SecondSection from "../../components/SecondSection/SecondSection"
import SixthSection from "../../components/SixthSection/SixthSection"
import ThirdSection from "../../components/ThirdSection/ThirdSection"
import YoutubeVideos from "../../components/YoutubeVideos/YoutubeVideos"

function Home() {
  return (
    <>
      <Alert/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <YoutubeVideos/>
    </>
  )
}

export default Home
