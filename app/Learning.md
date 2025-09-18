/* flex-1 translates to: */

.flex-1 {
  flex: 1 1 0%;
}

/* Which is shorthand for: */
.flex-1 {
  flex-grow: 1;      /* Can grow to fill available space */
  flex-shrink: 1;    /* Can shrink if needed */
  flex-basis: 0%;    /* Initial size before growing/shrinking */
}

transition-all;

/* transition-all translates to: */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

"Smoothly animate ANY property change over 150ms"


when adding hover button effect use `hover:bg-white/10 ` to make its shade up by 10%

break-words
required

```jsx

const {state , setState} = useState("");

<textarea 
  onChange={(e) => setState(e.target.value)} 
  value={state}  // This makes it "controlled"
/>
```

Using value = {state} is necessay because it syncs state with value
it is necessay when you are manipulate state again somewhere in code, suppose you are creating a clear button so you do

```jsx
<button onCick={()=>setState("")} >Reset</button>
```
Now this reset button will not work as textarea value will be showing different stuff still after resetting button

