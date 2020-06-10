import Skill from './Skill';

interface Offer {
  title: string;
  street: string;
  city: string;
  country_code: string;
  address_text: string;
  marker_icon: string;
  remote: boolean;
  company_name: string;
  company_url: string;
  company_size: string;
  experience_level: string;
  salary_from: number | null;
  salary_to: number | null;
  salaryFromInPLN?: number | null;
  salaryToInPLN?: number | null;
  salary_currency: string;
  latitude: string;
  longitude: string;
  employment_type: string;
  published_at: string;
  id: string;
  company_logo_url: string;
  skills: Skill[];
}

export default Offer;
