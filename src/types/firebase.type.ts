export interface UserType {
  id?: string; // Firebase에서 생성되는 고유 ID (string 타입)
  name?: string; // 사용자 이름
  email: string; // 사용자 이메일(고유 값)
  password: string; // 비밀번호 (Firebase Auth 사용 시 필요 없을 수 있음)
  is_admin?: boolean; // 어드민 판별 true : 어드민  false : 유저
  createdAt?: Date; // 계정 생성 시간
  updatedAt?: Date; // 계정 정보 마지막 업데이트 시간
}
export interface ReservationType {
  id: string; // 예약 ID (Firebase에서 생성된 고유 ID)
  userId: string; // 예약한 사용자 ID (Users 테이블의 ID 참조)
  reservationTime: Date; // 예약 시간
  status: "completed" | "cancelled"; // 예약 상태 ('completed' 또는 'cancelled')
  createdAt: Date; // 예약 생성 시간
  updatedAt: Date; // 예약 마지막 업데이트 시간
}
