import { Category } from './index'

/**
 * Makes a category name more human-readable by removing technical prefixes
 * and converting to sentence case
 */
export function makeNameHumanReadable(rawName: string): string {
  // 1) Strip out leading known prefixes
  const knownPrefixes = [
    "realestate-", 
    "bap-", 
    "bap-sell-", 
    "bap-wanted-", 
    "bap-giveaway-", 
    "recommerce-", 
    "recommerce-sell-", 
    "recommerce-wanted-", 
    "recommerce-giveaway-",
    "job-", 
    "job-agency-", 
    "job-aggregated-",
  ];
  
  let nameClean = rawName;
  for (const prefix of knownPrefixes) {
    if (nameClean.startsWith(prefix)) {
      nameClean = nameClean.substring(prefix.length);
      break; // Only remove one prefix
    }
  }
  
  // 2) Replace hyphens with spaces
  const words = nameClean.split('-');
  nameClean = words.join(' ');
  
  // 3) Convert to sentence case
  if (!nameClean) return "";
  return nameClean.charAt(0).toUpperCase() + nameClean.slice(1).toLowerCase();
}

/**
 * Recursively transforms category names to be more human-readable
 */
export function transformCategories(categories: Category[]): Category[] {
  return categories.map(cat => {
    // Create a new object to avoid mutating the original
    const transformedCat = { ...cat };
    
    // Transform the name
    transformedCat.name = makeNameHumanReadable(transformedCat.name);
    
    // Recursively transform children if they exist
    if (transformedCat.children && Array.isArray(transformedCat.children)) {
      transformedCat.children = transformCategories(transformedCat.children);
    }
    
    return transformedCat;
  });
}

// Function to parse the JSON string or object and extract the categories
export function parseCategories(input: any): Category[] {
  try {
    // If the input is already an object, use it directly
    let data;
    if (typeof input === 'object') {
      data = input;
    } else {
      // The JSON file might be malformed, so we need to fix it
      try {
        // First try to parse it directly
        data = JSON.parse(input);
      } catch (e) {
        // If that fails, try to fix it by adding a wrapper
        const fixedJson = `{"categories": ${input}}`;
        data = JSON.parse(fixedJson);
      }
    }
    
    // Extract categories from the data
    let categories;
    
    // Check for the specific structure in our JSON file
    if (data && data.data && data.data.adcategories) {
      categories = data.data.adcategories;
    } else if (Array.isArray(data)) {
      // If data is already an array, use it directly
      categories = data;
    } else if (data.categories) {
      // If data has a categories property, use that
      categories = data.categories;
    } else {
      // Otherwise, try to find any array in the data
      const possibleArrays = Object.values(data).filter(val => Array.isArray(val));
      categories = possibleArrays.length > 0 ? possibleArrays[0] : [];
    }
    
    // Ensure we have an array
    if (!Array.isArray(categories)) {
      categories = [];
    }
    
    // Transform the category names to be more human-readable
    const transformedCategories = transformCategories(categories);
    
    return transformedCategories;
  } catch (error) {
    console.error('Error parsing categories JSON:', error);
    return [];
  }
}

// Generate mock categories for testing
export function generateMockCategories(): Category[] {
  return [
    {
      name: "Electronics",
      id: "electronics",
      __typename: "AdCategories",
      children: [
        {
          name: "Computers",
          id: "computers",
          __typename: "AdCategories",
          children: [
            {
              name: "Laptops",
              id: "laptops",
              __typename: "AdCategories",
              children: []
            },
            {
              name: "Desktops",
              id: "desktops",
              __typename: "AdCategories",
              children: []
            }
          ]
        },
        {
          name: "Phones",
          id: "phones",
          __typename: "AdCategories",
          children: [
            {
              name: "Smartphones",
              id: "smartphones",
              __typename: "AdCategories",
              children: []
            },
            {
              name: "Feature Phones",
              id: "feature-phones",
              __typename: "AdCategories",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Clothing",
      id: "clothing",
      __typename: "AdCategories",
      children: [
        {
          name: "Men's Clothing",
          id: "mens-clothing",
          __typename: "AdCategories",
          children: []
        },
        {
          name: "Women's Clothing",
          id: "womens-clothing",
          __typename: "AdCategories",
          children: []
        }
      ]
    },
    {
      name: "Home & Garden",
      id: "home-garden",
      __typename: "AdCategories",
      children: []
    }
  ]
} 