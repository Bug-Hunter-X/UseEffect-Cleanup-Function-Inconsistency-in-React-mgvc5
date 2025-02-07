```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cleanup = () => {
      console.log('Cleanup function executed');
    };
    // This effect runs on every render
    console.log('Component rendered with count:', count);
    return cleanup;
  }, [count]); // The effect depends on 'count'

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```