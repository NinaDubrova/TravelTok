from io import BytesIO
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
import qrcode
from .models import Booking

# Create your views here.
def generate_payment_qr(request, booking_id):
    # Поиск бронирования по ID.
    booking = get_object_or_404(Booking, id = booking_id)
    # Генерация URL оплаты, в данном случае ссылка Mbank.
    payment_url = "https://mbank.kg/"
    # Генерация QR-кода.
    qr = qrcode.QRCode(version = 1, box_size = 10, border = 5)
    qr.add_data(payment_url)
    qr.make(fit = True)
    img = qr.make_image(fill = 'black', back_color = 'white')
    buffer = BytesIO()
    img.save(buffer)
    buffer.seek(0)
    return HttpResponse(buffer, content_type = "image/png")
