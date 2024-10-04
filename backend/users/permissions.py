from rest_framework import permissions


class Is_Admin(permissions.BasePermission):
    """
    Разрешение для администратора.
    Только администраторы могут выполнять это действие.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'admin'


class Is_Manager_Or_Admin(permissions.BasePermission):
    """
    Разрешение для менеджеров или администраторов.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and (request.user.role == 'manager' or request.user.role == 'admin')


class Is_Author_Or_Read_Only(permissions.BasePermission):
    """
    Разрешение для авторов тура.
    Только авторы могут редактировать свои туры.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user == obj.author
