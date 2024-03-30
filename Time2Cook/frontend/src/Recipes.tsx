import './Recipes';
import { useLocation } from 'react-router-dom';

function Recipes() {
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchRecipeSuggestions = async () => {
      try {
        const ingredients = new URLSearchParams(location.search).get('ingredients');
        const response = await fetchRecipeSuggestionsFromOpenAI(ingredients);
        setRecipeSuggestions(response);
      } catch (error) {
        console.error('Error fetching recipe suggestions:', error);
      }
    };

    fetchRecipeSuggestions();
  }, [location.search]);

  const fetchRecipeSuggestionsFromOpenAI = async (ingredients) => {
    if (!ingredients) return [];
    const apiKey = 'YOUR_OPENAI_API_KEY';
    const prompt = `Generate recipe suggestions based on ingredients: ${ingredients}`;
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'text-davinci-002',
        prompt: prompt,
        max_tokens: 200
      })
    });
    const data = await response.json();
    return [data.choices[0].text.trim()];
  };

  return (
    <div>
      <h1>Recipes Page</h1>
      <ul>
        {recipeSuggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
