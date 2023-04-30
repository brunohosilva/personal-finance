export const setColorCategoryPieChart = (category: string) => {
  const labelCategory = category.toLowerCase();
  let color = '';

  switch (labelCategory) {
    case 'budget':
      return color = '#42ff8b';

    case 'mercado':
      return color = '#324ea8';

    case 'posto':
      return color = '#ffba42';

    case 'farmacia':
      return color = '#ff425b';

    default:
      return color = '#000000';
  }
};
