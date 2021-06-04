import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/lazy';
import { defaultVid } from '../constants/videoConstants';

export default function VideoPlayer() {
  const router = useRouter();
  const { id } = router.query;

  const vidUrl = `https://www.youtube.com/watch?v=${id ? id : defaultVid}`;
  return (
    <>
      <div className="flex justify-center mx-auto lg:hidden">
        <ReactPlayer
          width="320px"
          height="180px"
          controls={true}
          url={vidUrl}
        />
      </div>
      <div className="hidden lg:block">
        <ReactPlayer
          width="960px"
          height="540px"
          controls={true}
          url={vidUrl}
        />
      </div>
    </>
  );
}
