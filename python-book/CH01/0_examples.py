#  1.1 정수
print((999).bit_length())  # (Python 3.1) 정수를 나타내는 데 필요한 바이트 수 확인

# int(문자열, n): 문자열을 n진법 정수로 변환
s = '11'
d = int(s)

b = int(s, 2)  # 이진법 정수를 십진법으로 변환
print(b)

def a(x, y, places = 7):
  return round(abs(x-y), places) == 0  # 주어진 소수자릿수(기본 7)로 반올림한 뒤 비교