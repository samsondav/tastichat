const enterNickname = nickname => {
  return {
    type: 'ENTER_NICKNAME',
    nickname: nickname,
  };
};

export default enterNickname;
