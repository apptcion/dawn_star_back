import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Document & User

type Coupon = { // 쿠폰
    coupon_id: number; // 쿠폰 아이디
    expired: Date; // 기한
    discount: number; // 할인 가격격
}

type Level = {
    now: number; // 현재 레벨
    progress: number; // 현재 쌓은 점수
    goal: number; // 다음 레벨까지 필요한 점수
}

@Schema()
export class User{

    @Prop()
    name: string;

    // 사용자 이름 ( 아이디 )
    @Prop({required: true})
    username: string;

    // 사용자 실제 이름
    @Prop({required: true})
    real_name: string;

    // 비밀번호 ( Hash )
    @Prop({required: true})
    password: string;

    // 프로필 이미지 base64
    @Prop()
    profile: string;

    // 이용자 레벨 ( ex) lv. 2 새싹 등급 )
    @Prop({
        type: {
          now: Number,
          progress: Number,
          goal: Number,
        },
        default: {
          now: 0,
          progress: 0,
          goal: 100,
        },
    })
    level: Level;
    
    // 적립금
    @Prop({default: 0})
    point: number;

    // 쿠폰
    @Prop({
        type: [
          {
            coupon_id: Number,
            expired: Date,
            discount: Number,
          },
        ],
        default: [],
      })
    coupons: Array<Coupon>

    // 사용자 활동 기록, (리뷰, 구매 내역, 취소, 교환, 환불, 최근 본 상품, 장바구니 등 )
    @Prop({ type: Object, default: {} })
    log: Record<string, any>;//temp type. TODO
}

export const UserSchema = SchemaFactory.createForClass(User)