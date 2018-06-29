BloomTextInput Example:

```jsx
<BloomTextInput 
  label="Text Input"
  placeholder="Insert text here"
  error={{
    minLength: "Not enough characters",
    maxLength: "Too many characters"
  }}
  minLength={3}
  maxLength={10}
/>
```
