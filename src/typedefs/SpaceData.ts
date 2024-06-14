import DayPassDiscounts from './Discount'

interface ISpaceData {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    google_maps_url: string;
    state: string;
    country: string;
    postal_code: string;
    description: string;
    rules: string;
    amenities: string[];
    images: string[];
    working_hours_start: string;
    working_hours_end: string;
    contact_person_name: string;
    facilities: string[];
    is_active: boolean;
    is_day_pass_enabled: boolean;
    day_pass_price: number;
    day_pass_discounts_percentage: DayPassDiscounts;
    manager_id: string;
}
export default ISpaceData;  