export const constructPrompt = (
  timeAvailable: string,
  ingredientsAvailable: string,
  dietaryRestrictions: string,
  preferredCuisine: string,
  budgetAmount: string,
  mealChoice: string,
  owned: string,
  notOwned: string
) => {
  let apiPrompt = "Generate three recipes with detailed step by step instructions. ";

  if (timeAvailable !== "") {
    apiPrompt += `cook time: ${timeAvailable}, `;
  }
  if (ingredientsAvailable !== "") {
    apiPrompt += `using: ${ingredientsAvailable}, `;
  }
  if (dietaryRestrictions !== "") {
    apiPrompt += `keeping these allergies/dietary restrictions in mind: ${dietaryRestrictions}, `;
  }
  if (preferredCuisine !== "") {
    apiPrompt += `dish/cuisine: ${preferredCuisine}, `;
  }
  if (budgetAmount !== "") {
    apiPrompt += `costing less than: ${budgetAmount}, `;
  }
  if (mealChoice !== "") {
    apiPrompt += `meal of day: ${mealChoice},`;
  }
  if (owned !== "") {
    apiPrompt += `has these: ${owned},`;
  }
  if (notOwned !== "") {
    apiPrompt += `does not own: ${notOwned}.`;
  }
  return apiPrompt;
};