using Serenity.Services;

namespace SerenitySkins.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}