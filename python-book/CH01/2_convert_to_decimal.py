# my answer
def convert_to_decimal(number, base):
  result = 0
  number = str(number)
  for i in range(len(number)):
    result += int(number[i]) * (base ** i)
  return result

# book
def convert_to_decimal(number, base):
  multiplier, result = 1, 0
  while number > 0:
    result += number % 10 * multiplier
    multiplier *= base
    number = number // 10
  return result

# test code
def test_convert_to_decimal():
  # number, base = 1001, 2
  # assert(convert_to_decimal(number, base) == 9)
  number, base = 10101010101011111011, 2
  # print(convert_to_decimal(number, base))
  assert(convert_to_decimal(number, base) == 699131)
  print('successfully passed !')

if __name__ == "__main__":
  test_convert_to_decimal()