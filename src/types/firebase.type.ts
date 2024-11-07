import firebase from "firebase/compat/app";

export type UserType = {
  id?: string; // Firebase에서 생성되는 고유 ID (string 타입)
  name?: string; // 사용자 이름
  email: string; // 사용자 이메일(고유 값)
  password: string; // 비밀번호 (Firebase Auth 사용 시 필요 없을 수 있음)
  address: string;
  is_admin?: boolean; // 어드민 판별 true : 어드민  false : 유저
  phone_number: string;
  createdAt: firebase.firestore.Timestamp; // 사용자 등록 일자
  updatedAt: firebase.firestore.Timestamp; // 사용자 수정 일자
};

// products 컬렉션 타입
export type ProductType = {
  id: string; // Firestore 문서 ID
  name: string; // 상품 이름
  description: string; // 상품 설명
  category: string; // 상품 카테고리 (예: 숙박, 투어 등)
  price: number; // 상품 가격
  availableFrom: firebase.firestore.Timestamp; // 예약 가능 시작일
  availableTo: firebase.firestore.Timestamp; // 예약 가능 종료일
  minGuests: number; // 최소 예약 가능 인원
  maxGuests: number; // 최대 예약 가능 인원
  ageRestriction: number; // 연령 제한 (예: 18세 이상)
  images: string[]; // 상품 이미지 URL 목록
  createdAt: firebase.firestore.Timestamp; // 상품 등록 일자
  updatedAt: firebase.firestore.Timestamp; // 상품 수정 일자
  status: "active" | "inactive" | "draft"; // 상품 상태 (예: 활성, 비활성, 임시 저장)
};

// reservations 컬렉션 타입
export type ReservationType = {
  id: string; // Firestore 문서 ID
  productId: string; // 예약한 상품의 ID (참조용)
  userId: string; // 예약자 ID
  reservationDate: firebase.firestore.Timestamp; // 예약 날짜 및 시간
  guestsCount: number; // 예약 인원수
  totalPrice: number; // 총 결제 금액
  status: "confirmed" | "cancelled" | "pending"; // 예약 상태 (예: 예약 완료, 취소, 대기 중)
  createdAt: firebase.firestore.Timestamp; // 예약 생성 일자
  updatedAt: firebase.firestore.Timestamp; // 예약 수정 일자
};

// notifications 컬렉션 타입
export type NotificationType = {
  id: string; // Firestore 문서 ID
  userId: string; // 알림을 받을 사용자 ID
  message: string; // 알림 메시지
  type:
    | "reservation_confirmed"
    | "reservation_cancelled"
    | "reservation_changed"; // 알림 유형
  read: boolean; // 알림 읽음 상태
  createdAt: firebase.firestore.Timestamp; // 알림 생성 일자
};

// categories 컬렉션 타입 (추후 사용)
export type CategoryType = {
  id: string; // Firestore 문서 ID
  name: string; // 카테고리 이름
  description: string; // 카테고리 설명
  createdAt: firebase.firestore.Timestamp; // 카테고리 생성 일자
};
