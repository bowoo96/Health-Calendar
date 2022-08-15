import React from "react";

const Login = () => {
  const REST_API_KEY: string = "fce6d7486e47b990f2d2dfd826cb663a";
  const REDIRECT_URI: string = "http://localhost:3000/kakao";
  const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <h1>운동기록앱 로그인</h1>
      <a href={KAKAO_AUTH_URL}>카카오 로그인하기</a>
    </>
  );
};

export default Login;
