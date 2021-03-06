from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import UserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.core import validators
from news.models import Category
import re


#class User(AbstractBaseUser, PermissionsMixin):
#
#    username = models.CharField(
#        _("username"),
#        max_length=15,
#        unique=True,
#        help_text=_(
#            "Required. 15 characters or fewer. Letters, numbers and @/./+/-/_ characters"
#        ),
#        validators=[
#            validators.RegexValidator(
#                re.compile("^[\w.@+-]+$"), _("Enter a valid username."), _("invalid")
#            )
#        ],
#    )
#    first_name = models.CharField(_("first name"), max_length=30)
#    last_name = models.CharField(_("last name"), max_length=30)
#    email = models.EmailField(_("email address"), max_length=255, unique=True)
#    is_staff = models.BooleanField(
#        _("staff status"),
#        default=False,
#        help_text=_("Designates whether the user can log into this admin site."),
#    )
#    is_active = models.BooleanField(
#        _("active"),
#        default=True,
#        help_text=_(
#            "Designates whether this user should be treated as active. Unselect this instead of deleting accounts."
#        ),
#    )
#    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)
#    interests = models.ManyToManyField(Category)
#    USERNAME_FIELD = "email"
#    REQUIRED_FIELDS = []
#    objects = UserManager()
#