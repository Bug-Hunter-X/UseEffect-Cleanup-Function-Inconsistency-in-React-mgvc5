```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render
    console.log('Component rendered with count:', count);
    return () => {
      // Cleanup function, runs when the component unmounts or when the effect runs again
      console.log('Cleanup function executed');
    };
  }, [count]); // The effect depends on 'count'

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```