from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def test(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        age = request.POST.get('age', '')
        result = f"您的姓名是{name}，年齡是{age}"
        return HttpResponse(result)
    else:
        return HttpResponse('請使用POST方法傳送表單資料')
    print('完成')
