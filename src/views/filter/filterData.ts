

export function resolveIconType(code: number) {
  switch (Math.floor(code)) {
    case 1:
      return "sign-winbox"
      break;
    case 2:
      //跳转到 我的奖品页面
      return "sign-tagbox"
      break;

    default:
      break;
  }
}

