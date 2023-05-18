export interface MediaFile extends File {
    preview: string;
    publicId: string;
    secureUrl?: string;
    url: string;
}

export type PrivacyOption = "public" | "friends" | "only-me";

export interface PublicationInputProps
  extends React.HTMLAttributes<HTMLDivElement> {
  userPrivacyDefault?: PrivacyOption;
}