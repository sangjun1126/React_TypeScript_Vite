// App.tsx에서 버튼을 만들어보기

import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  if (liked) return '안녕하세요'

  // 누가 이렇게 써요 ㅋㅋㅋ (공식문서 코드)
  // return React.createElement('button', {
  //   onClick : () => setLiked(true),
  // })


  return <button onClick={() => setLiked(true)}>클릭!</button>
}

export default LikeButton;