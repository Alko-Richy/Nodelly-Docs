# Sorting

The Sort module contains multiple sorting algorithms and utility sorting functions.

## Numerical Sorts

- bubbleSort
- selectionSort
- insertionSort
- mergeSort
- quickSort
- countingSort
- heapSort

## Special Sorts

- alphanumericSort
- smartSort
- dateSort
- objectSort
- shuffle

## Smart Sort Example

```js
Sort.smartSort(
    [
        "Dog",
        "12",
        "Apple",
        "File2",
        "5"
    ],
    "AZ09"
);
```

Output:

```js
[
    "Apple",
    "Dog",
    "File2",
    "5",
    "12"
]
```

## Smart Sort Modes

- AZ09
- AZ90
- ZA09
- ZA90
- 09AZ
- 90AZ
- 09ZA
- 90ZA