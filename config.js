/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg,2.jpg, ... - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "심지훈",
    father: "심광석",
    mother: "김정남",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "이승윤",
    father: "이동철",
    mother: "김유리",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-05",
    time: "15:30",
    venue: "강동 루벨",
    hall: "35층",
    address: "서울시 강동구 천호대로 1077 (강동역 1번출구 연결)",
    tel: "02-6956-0230",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1185379934",
      naver: "https://naver.me/5r9z4Z05?"
    }
  },

  // ── 인사말 ──
 greeting: {
  title: "소중한 분들을 초대합니다",

  poem: "사람이 온다는 건\n실은 어마어마한 일이다.\n그는 과거와\n현재와\n그리고\n그의 미래가 함께 오기 때문이다.\n한 사람의 일생이 오기 때문이다\n부서지기 쉬운\n그래서 부서지기도 했을\n마음이 오는 것이다 - 그 갈피를\n아마 바람은 더듬어 볼 수 있을\n마음.\n내 마음이 그런 바람을 흉내낸다면\n필경 환대가 될 것이다.\n정현종 「방문객」 ",
  content: ""
},

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "안정적인 시몬스침대 지훈 \n 밝은 에너자이저 승윤\n서로 다른 점들이 서로에게 힘이 되어\n이제 하나의 길을 평생 함께 걷고자 합니다.\n\축복 오네가이~야르"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "심지훈", bank: "국민은행", number: "404602-01-369095" },
    ],
    bride: [
      { role: "신부", name: "이승윤", bank: "신한은행", number: "110-468-410984" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "심지훈 ♥ 이승윤 결혼합니다",
    description: "2026년 12월 5일, 새로운 시작을 함께 해주세요."
  }
};
