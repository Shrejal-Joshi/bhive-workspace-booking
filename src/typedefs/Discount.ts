// typedefs/Discount.ts
interface DiscountDetail {
    value: number;
    message: string;
  }
  
interface DayPassDiscounts {
    [key: string]: DiscountDetail;
}
  
export default DayPassDiscounts;
  