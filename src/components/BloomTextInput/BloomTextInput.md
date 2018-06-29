BloomTextInput Example:

```jsx
<BloomTextInput 
  label="Text Input"
  placeholder="Insert text here"
  className="test"
  validations={[
    {
      message: "Not enough characters",
      test: (i) => i.length < 3
    },
    {
      message: "Too many characters",
      test: (i) => i.length > 10
    }
  ]}
/>
```
