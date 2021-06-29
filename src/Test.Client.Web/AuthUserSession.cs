using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.Auth;

namespace Test.Client.Web
{
    [DataContract]
    public class AuthUserSession : IMeta
    {
        public AuthUserSession()
        {
            this.ProviderOAuthAccess = new List<IAuthTokens>();
            this.Meta = new Dictionary<string, string>();
        }

        [DataMember(Order = 01)] public string ReferrerUrl { get; set; }
        [DataMember(Order = 02)] public string Id { get; set; }
        [DataMember(Order = 03)] public string UserAuthId { get; set; }
        /// <summary>
        /// User chosen Username when available or Email
        /// </summary>
        [DataMember(Order = 04)] public string UserAuthName { get; set; }
        [DataMember(Order = 05)] public string UserName { get; set; }
        [DataMember(Order = 06)] public string TwitterUserId { get; set; }
        [DataMember(Order = 07)] public string TwitterScreenName { get; set; }
        [DataMember(Order = 08)] public string FacebookUserId { get; set; }
        [DataMember(Order = 09)] public string FacebookUserName { get; set; }
        [DataMember(Order = 10)] public string FirstName { get; set; }
        [DataMember(Order = 11)] public string LastName { get; set; }
        [DataMember(Order = 12)] public string DisplayName { get; set; }
        [DataMember(Order = 13)] public string Company { get; set; }
        [DataMember(Order = 14)] public string Email { get; set; }
        [DataMember(Order = 15)] public string PrimaryEmail { get; set; }
        [DataMember(Order = 16)] public string PhoneNumber { get; set; }
        [DataMember(Order = 17)] public DateTime? BirthDate { get; set; }
        [DataMember(Order = 18)] public string BirthDateRaw { get; set; }
        [DataMember(Order = 19)] public string Address { get; set; }
        [DataMember(Order = 20)] public string Address2 { get; set; }
        [DataMember(Order = 21)] public string City { get; set; }
        [DataMember(Order = 22)] public string State { get; set; }
        [DataMember(Order = 23)] public string Country { get; set; }
        [DataMember(Order = 24)] public string Culture { get; set; }
        [DataMember(Order = 25)] public string FullName { get; set; }
        [DataMember(Order = 26)] public string Gender { get; set; }
        [DataMember(Order = 27)] public string Language { get; set; }
        [DataMember(Order = 28)] public string MailAddress { get; set; }
        [DataMember(Order = 29)] public string Nickname { get; set; }
        [DataMember(Order = 30)] public string PostalCode { get; set; }
        [DataMember(Order = 31)] public string TimeZone { get; set; }
        [DataMember(Order = 32)] public string RequestTokenSecret { get; set; }
        [DataMember(Order = 33)] public DateTime CreatedAt { get; set; }
        [DataMember(Order = 34)] public DateTime LastModified { get; set; }
        [DataMember(Order = 35)] public List<string> Roles { get; set; }
        [DataMember(Order = 36)] public List<string> Permissions { get; set; }
        [DataMember(Order = 37)] public bool IsAuthenticated { get; set; }
        [DataMember(Order = 38)] public bool FromToken { get; set; }
        [DataMember(Order = 39)] public string ProfileUrl { get; set; } //Avatar
        [DataMember(Order = 40)] public string Sequence { get; set; }
        [DataMember(Order = 41)] public long Tag { get; set; }
        [DataMember(Order = 42)] public string AuthProvider { get; set; }
        [DataMember(Order = 43)] public List<IAuthTokens> ProviderOAuthAccess { get; set; }
        [DataMember(Order = 44)] public Dictionary<string, string> Meta { get; set; }
        
        //Claims https://docs.microsoft.com/en-us/previous-versions/windows-identity-foundation/ee727097(v=msdn.10)
        [DataMember(Order = 45)] public List<string> Audiences { get; set; }
        [DataMember(Order = 46)] public List<string> Scopes { get; set; }
        [DataMember(Order = 47)] public string Dns { get; set; }
        [DataMember(Order = 48)] public string Rsa { get; set; }
        [DataMember(Order = 49)] public string Sid { get; set; }
        [DataMember(Order = 50)] public string Hash { get; set; }
        [DataMember(Order = 51)] public string HomePhone { get; set; }
        [DataMember(Order = 52)] public string MobilePhone { get; set; }
        [DataMember(Order = 53)] public string Webpage { get; set; }

        //IdentityUser<TKey>
        [DataMember(Order = 54)] public bool? EmailConfirmed { get; set; }
        [DataMember(Order = 55)] public bool? PhoneNumberConfirmed { get; set; }
        [DataMember(Order = 56)] public bool? TwoFactorEnabled { get; set; }
        [DataMember(Order = 57)] public string SecurityStamp { get; set; }
        [DataMember(Order = 58)] public string Type { get; set; }
    }
}