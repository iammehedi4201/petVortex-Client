export type TPet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  size: string;
  gender: string; // Replace with your actual Gender enum values
  location: string;
  description: string;
  temperament: string;
  healthStatus: string; // Replace with your actual HealthStatus enum values
  speacialNeeds: string;
  medicalHistory: string;
  adoptionRequirements: string;
  isDeleted: boolean;
  PetImages: [{ url: string }];
  createdAt: Date;
  updatedAt: Date;
};

export type TPetParams = {
  petId: string;
};
