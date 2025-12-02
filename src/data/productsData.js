// Individual product arrays for each category
export const proteinProducts = [
  { title: "Junior Chocolate Protein Powder", img: "/products/pro1.png" },
  { title: "Energy Drink Cum ORS Liquid", img: "/products/pro2.png" },
  { title: "Chocolate Protein Powder", img: "/products/pro3.png" },
  { title: "Sr Protein Powder", img: "/products/pro4.png" },
  { title: "Strawberry Flavour Protein Powder", img: "/products/pro5.png" },
];

export const suspensionProducts = [
  { title: "Lycopene Multivitamins Suspension", img: "/assets/suspension1.png" },
  { title: "Ferrous Ascorbate & Folic Acid Suspension", img: "/pharma-suspension/Ferrous-Ascorbate.jpeg" },
  { title: "Silymarin + L-Ornithine Suspension", img: "/assets/suspension3.png" },
  { title: "Ferrous Ascorbate Zinc Suspension", img: "/assets/suspension4.png" },
];

export const syrupProducts = [
  { title: "Fungal Diastase & Pepsin Syrup", img: "/assets/syrup1.png" },
  { title: "Recover VZ 200ml Syrup", img: "/assets/syrup2.png" },
  { title: "Digefast Pineapple Flavour", img: "/assets/syrup3.png" },
  { title: "Urocital Syrup", img: "/assets/syrup4.png" },
];

export const thirdPartyProducts = [
  { title: "TPM in Tamil Nadu", img: "/assets/tpm1.png" },
  { title: "TPM in Sikkim", img: "/assets/tpm2.png" },
  { title: "TPM in UP", img: "/assets/tpm3.png" },
  { title: "TPM in Punjab", img: "/assets/tpm4.png" },
  { title: "TPM Pharma Services", img: "/assets/tpm5.png" },
];

export const franchiseProducts = [
  { title: "Protein With Iron Syrup", img: "/products/pro1.png" },
  { title: "Cufkin-Ls 100ml", img: "/products/pro2.png" },
  { title: "PCD Franchise Chhattisgarh", img: "/products/pro3.png" },
  { title: "Sr Protein Powder", img: "/products/pro4.png" },
  { title: "Strawberry Flavour Powder", img: "/products/pro5.png" },
];

export const capsulesProducts = [
  { title: "Multivitamin Tablets Capsules", img: "/products/capsule1.png" },
  { title: "Soft Gel Capsules", img: "/products/capsule2.png" },
];

export const sweetenerProducts = [
  { title: "Neo Sucralose Sweetener", img: "/products/sweetener1.png" },
];

// Legacy export for backward compatibility
export const productCategories = {
  "protein-powder": {
    title: "Protein Powder",
    description:
      "Prominent & Leading Manufacturer from Nalagarh, we offer Junior Chocolate Protein Powder...",
    products: proteinProducts,
  },

  "pharma-suspension": {
    title: "Pharmaceutical Suspension",
    description:
      "Pioneers in the industry, we offer Lycopene Multivitamins and Multiminerals Suspension...",
    products: suspensionProducts,
  },

  "pharma-syrup": {
    title: "Pharmaceutical Syrup",
    description:
      "Our range includes Fungal Diastase And Pepsin Syrup, RECOVER - VZ, Digefast Pineapple flavour...",
    products: syrupProducts,
  },

  "third-party": {
    title: "Third Party Manufacturing",
    description:
      "We provide prompt and reliable Third Party Manufacturing.",
    products: thirdPartyProducts,
  },

  "pcd-franchise": {
    title: "PCD Pharma Franchise",
    description: "Emerged as a reputed service provider...",
    products: franchiseProducts,
  },

  "capsules": {
    title: "Pharmaceutical Capsules",
    description: "Manufacturer of Multivitamin Tablets Capsules & Softgel Capsules.",
    products: capsulesProducts,
  },

  "sweetener": {
    title: "Artificial Sweetener",
    description: "We offer Neo Sucralose Sweetener.",
    products: sweetenerProducts,
  },
};
