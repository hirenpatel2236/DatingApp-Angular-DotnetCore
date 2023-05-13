using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            return user.FindFirst(ClaimTypes.Name)?.Value;
        }

        public static int GetUserId(this ClaimsPrincipal user)
        {
            if (int.TryParse(user.FindFirst(ClaimTypes.NameIdentifier)?.Value, out int _id))
            {
                return _id;
            }
            return default;
        }
    }
}