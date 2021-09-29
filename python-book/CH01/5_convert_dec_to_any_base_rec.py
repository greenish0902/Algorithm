# mycode
def convert_dec_to_any_base_rec(number, base):
  num = []
  while (number >= base):  
    num.append(number % base)
    number = number // base
  num.append(number)
  return ''.join(list(map(str,num[::-1])))
  
# book
def convert_dec_to_any_base_rec(number, base):
  convertString = "012345679ABCDE"
  if number < base:
    return convertString[number]
  else:
    return convert_dec_to_any_base_rec(number // base, base) \
        + convertString[number % base]

# test code
def test_convert_dec_to_any_base_rec():
  number = 9
  base = 2
  assert(convert_dec_to_any_base_rec(number, base) == "1001")
  print("테스트 통과!")
if __name__ == "__main__":
  test_convert_dec_to_any_base_rec()