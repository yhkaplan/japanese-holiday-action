# Japanese Holiday Action

This action offers outputs to check if it's a Japanese public holiday and which one.

## Outputs

### `isHoliday`

Whether it's a holiday or not

### `holiday`

The holiday

## Example usage

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: Test
    steps:
      - name: Get holiday
        uses: actions/hello-world-javascript-action@v0.1
        id: holiday # ID to refer to in other steps

      - name: Says if holiday
        if: ${{ steps.holiday.outputs.isHoliday == 'true' }}
        run: echo "Today is ${{ steps.holiday.outputs.holiday }}."

      - name: Says if not a holiday
        if: ${{ steps.holiday.outputs.isHoliday != 'true' }}
        run: echo "Today is not a holiday."
```
