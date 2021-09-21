# my answer
def convert_from_decimal(number, base):
  result = ''
  while (number >= 1):
    result += str(number % base)
    number //= base
  return int(result[::-1])

# book
def convert_from_decimal(number, base):
  multiplier, result = 1, 0
  while (number > 0):
    result += number % base * multiplier
    multiplier *= 10
    number = number // base
  return result

# test code
def test_convert_from_decimal():
  number, base = 9, 2
  assert(convert_from_decimal(number, base) == 1001)
  number, base = 5, 2
  assert(convert_from_decimal(number, base) == 101)
  number, base = 699131, 2
  assert(convert_from_decimal(number, base) == 10101010101011111011)
  print('successfully passed !')

if __name__ == "__main__":
  test_convert_from_decimal()
