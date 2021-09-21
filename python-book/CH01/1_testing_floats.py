from fractions import Fraction

def rounding_floats(number1, places):
  return round(number1, places)

def float_to_fractions(number):
  return Fraction(*number.as_integer_ratio())

def get_denominator(number1, number2):  # 분모 반환
  a = Fraction(number1, number2)
  return a.denominator

def get_numerator(number1, number2):  # 분자 반환
  a = Fraction(number1, number2)
  return a.numerator

def test_testing_floats():
  number1 = 1.25
  number2 = 1
  number3 = -1
  number4 = 5/4
  number6 = 6
  assert(rounding_floats(number1, number2) == 1.2 )
  assert(rounding_floats)
  print(get_numerator(number2, number6))
  print(get_denominator(number3, number6))

test_testing_floats()