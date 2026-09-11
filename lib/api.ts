import { products as staticProducts, type Product } from "@/data/products";
import { services as staticServices, type Service } from "@/data/services";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api";

// Short TTL cache so pages stay live with backend changes (admin edits appear
// quickly) while avoiding a backend request on every render/mount.
const CACHE_TTL_MS = 60_000;

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

async function cachedFetch<T>(
  key: string,
  url: string,
  options?: { fresh?: boolean },
): Promise<T> {
  if (!options?.fresh) {
    const hit = cache.get(key);
    if (hit && hit.expiresAt > Date.now()) {
      return hit.data as T;
    }
  }

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }

  const value = (await res.json()) as T;
  cache.set(key, { data: value, expiresAt: Date.now() + CACHE_TTL_MS });
  return value;
}

export interface EnquiryPayload {
  fullName: string;
  contactInfo: string;
  companyName?: string;
  serviceType?: string;
  quantity?: string;
  message?: string;
}

export interface Seo {
  page: string;
  title: string | null;
  description: string | null;
  keywords: string | null;
}

export interface Contact {
  companyName: string | null;
  contact1: string | null;
  contact2: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  hours: string | null;
}

export async function getSeo(page: string, options?: { fresh?: boolean }): Promise<Seo | null> {
  try {
    const json = await cachedFetch<{ data: Seo }>(`seo:${page}`, `${API_URL}/seo/${page}`, options);
    return json.data;
  } catch {
    return null;
  }
}

export async function getContact(options?: { fresh?: boolean }): Promise<Contact | null> {
  try {
    const json = await cachedFetch<{ data: Contact }>("contact", `${API_URL}/contact`, options);
    return json.data;
  } catch {
    return null;
  }
}

export interface CmsPage {
  page: string;
  title: string | null;
  content: string | null;
  image: string | null;
}

export interface AdvantageCard {
  icon: string;
  tag: string | null;
  title: string;
  desc: string;
}

export interface HomeAdvantages {
  badgeLabel: string | null;
  sectionTitle: string | null;
  sectionTitleAccent: string | null;
  footerLabel: string | null;
  cards: AdvantageCard[];
}

export async function getAdvantages(options?: { fresh?: boolean }): Promise<HomeAdvantages | null> {
  try {
    const json = await cachedFetch<{ data: HomeAdvantages }>(
      "home-advantages",
      `${API_URL}/home-advantages`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export interface WhyChooseCard {
  icon: string;
  tag: string | null;
  title: string;
  desc: string;
}

export interface WhyChoose {
  badgeLabel: string | null;
  sectionTitle: string | null;
  sectionTitleAccent: string | null;
  subtitle: string | null;
  cards: WhyChooseCard[];
}

export async function getWhyChooseUs(options?: { fresh?: boolean }): Promise<WhyChoose | null> {
  try {
    const json = await cachedFetch<{ data: WhyChoose }>(
      "why-choose-us",
      `${API_URL}/why-choose-us`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export interface CapabilityCard {
  icon: string;
  tag: string | null;
  title: string;
  desc: string;
  bullets: string[];
}

export interface HomeCapabilities {
  badgeLabel: string | null;
  sectionTitle: string | null;
  sectionTitleAccent: string | null;
  cards: CapabilityCard[];
}

export async function getCapabilities(options?: { fresh?: boolean }): Promise<HomeCapabilities | null> {
  try {
    const json = await cachedFetch<{ data: HomeCapabilities }>(
      "capabilities",
      `${API_URL}/capabilities`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export interface AboutCard {
  icon: string | null;
  title: string | null;
  desc: string | null;
  footer: string | null;
}

export interface AboutCarouselImage {
  image: string | null;
  alt: string | null;
}

export interface AboutSection {
  badgeLabel: string | null;
  sectionTitle: string | null;
  sectionTitleAccent: string | null;
  overviewLabel: string | null;
  overviewText: string | null;
  overviewFooter: string | null;
  overviewImage: string | null;
  cards: AboutCard[];
  carouselImages: AboutCarouselImage[];
}

export async function getAboutSection(options?: { fresh?: boolean }): Promise<AboutSection | null> {
  try {
    const json = await cachedFetch<{ data: AboutSection }>(
      "about-section",
      `${API_URL}/about-section`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export interface CoreExpertiseCard {
  icon: string | null;
  tag: string | null;
  title: string | null;
  desc: string | null;
  footer: string | null;
}

export interface CoreExpertise {
  badgeLabel: string | null;
  sectionTitle: string | null;
  sectionTitleAccent: string | null;
  subtitle: string | null;
  cards: CoreExpertiseCard[];
}

export async function getCoreExpertise(options?: { fresh?: boolean }): Promise<CoreExpertise | null> {
  try {
    const json = await cachedFetch<{ data: CoreExpertise }>(
      "core-expertise",
      `${API_URL}/core-expertise`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export interface CtaContact {
  badgeLabel: string | null;
  sectionTitle: string | null;
  sectionTitleAccent: string | null;
  subtitle: string | null;
}

export async function getCtaContact(options?: { fresh?: boolean }): Promise<CtaContact | null> {
  try {
    const json = await cachedFetch<{ data: CtaContact }>(
      "cta-contact",
      `${API_URL}/cta-contact`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export async function getCms(page: string, options?: { fresh?: boolean }): Promise<CmsPage | null> {
  try {
    const json = await cachedFetch<{ data: CmsPage }>(`cms:${page}`, `${API_URL}/cms/${page}`, options);
    return json.data;
  } catch {
    return null;
  }
}

export interface FooterAbout {
  description: string | null;
}

export async function getFooterAbout(options?: { fresh?: boolean }): Promise<FooterAbout | null> {
  try {
    const json = await cachedFetch<{ data: FooterAbout }>(
      "footer-about",
      `${API_URL}/footer-about`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export interface HeroSettings {
  badgeTitle: string | null;
  badgeLocation: string | null;
  headline1: string | null;
  headlineAccent: string | null;
  headline2: string | null;
  description: string | null;
  buttonLabel: string | null;
  qualityTitle: string | null;
  qualitySubtitle: string | null;
}

export async function getHeroSettings(options?: { fresh?: boolean }): Promise<HeroSettings | null> {
  try {
    const json = await cachedFetch<{ data: HeroSettings }>(
      "hero-settings",
      `${API_URL}/hero-settings`,
      options,
    );
    return json.data;
  } catch {
    return null;
  }
}

export async function getProducts(options?: { fresh?: boolean }): Promise<Product[]> {
  try {
    const json = await cachedFetch<{ data: Product[] }>("products", `${API_URL}/products`, options);
    return json.data;
  } catch {
    // Graceful fallback to the static catalog if the backend is unavailable.
    return staticProducts;
  }
}

export async function getProduct(slug: string, options?: { fresh?: boolean }): Promise<Product | null> {
  try {
    const json = await cachedFetch<{ data: Product }>(`product:${slug}`, `${API_URL}/products/${slug}`, options);
    return json.data;
  } catch {
    return staticProducts.find((p) => p.slug === slug) ?? null;
  }
}

export async function getServices(options?: { fresh?: boolean }): Promise<Service[]> {
  try {
    const json = await cachedFetch<{ data: Service[] }>("services", `${API_URL}/services`, options);
    return json.data;
  } catch {
    return staticServices;
  }
}

export async function getService(slug: string, options?: { fresh?: boolean }): Promise<Service | null> {
  try {
    const json = await cachedFetch<{ data: Service }>(`service:${slug}`, `${API_URL}/services/${slug}`, options);
    return json.data;
  } catch {
    return staticServices.find((s) => s.slug === slug) ?? null;
  }
}

export async function submitEnquiry(data: EnquiryPayload): Promise<void> {
  const res = await fetch(`${API_URL}/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      full_name: data.fullName,
      contact_info: data.contactInfo,
      company_name: data.companyName,
      service_type: data.serviceType,
      quantity: data.quantity,
      message: data.message,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to submit enquiry. Please try again.");
  }
}