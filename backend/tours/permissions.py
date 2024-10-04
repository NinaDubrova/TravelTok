from rest_framework import permissions


class Is_Author_Or_Read_Only(permissions.BasePermission):
    """
    Разрешение для авторов тура.
    Только авторы могут редактировать свои туры.
    """
    def has_object_permission(self, request, view, obj):
        # Разрешено для всех, если это безопасный метод(например, GET, HEAD или OPTIONS).
        if request.method in permissions.SAFE_METHODS:
            return True
        # Редактировать может только автор тура.
        return obj.author == request.user
